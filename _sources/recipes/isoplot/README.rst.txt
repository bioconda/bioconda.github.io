:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isoplot'
.. highlight: bash

isoplot
=======

.. conda:recipe:: isoplot
   :replaces_section_title:
   :noindex:

   Generate figures from Isocor output

   :homepage: https://github.com/llegregam/Isoplot
   :documentation: https://isoplot.readthedocs.io/
   
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`isoplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoplot/meta.yaml>`_

   


.. conda:package:: isoplot

   |downloads_isoplot| |docker_isoplot|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.4-0``,  ``1.2.3.2-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.0.5-0``

      

   
   :depends bokeh: ``2.0.2``
   :depends colorcet: ``>=2.0.2``
   :depends ipywidgets: ``>=7.5.1``
   :depends matplotlib-base: ``>=3.3.1``
   :depends natsort: ``>=7.0.1``
   :depends numpy: ``>=1.19.1``
   :depends openpyxl: ``>=3.0.5``
   :depends pandas: ``>=1.1.1``
   :depends python: 
   :depends seaborn: ``>=0.10.1``
   :depends xlrd: ``>=1.2.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install isoplot

   and update with::

      mamba update isoplot

  To create a new environment, run::

      mamba create --name myenvname isoplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isoplot:<tag>

   (see `isoplot/tags`_ for valid values for ``<tag>``)


.. |downloads_isoplot| image:: https://img.shields.io/conda/dn/bioconda/isoplot.svg?style=flat
   :target: https://anaconda.org/bioconda/isoplot
   :alt:   (downloads)
.. |docker_isoplot| image:: https://quay.io/repository/biocontainers/isoplot/status
   :target: https://quay.io/repository/biocontainers/isoplot
.. _`isoplot/tags`: https://quay.io/repository/biocontainers/isoplot?tab=tags


.. raw:: html

    <script>
        var package = "isoplot";
        var versions = ["1.3.1","1.3.0","1.2.4","1.2.3.2","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isoplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isoplot/README.html