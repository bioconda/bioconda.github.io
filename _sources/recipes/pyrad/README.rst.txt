:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrad'
.. highlight: bash

pyrad
=====

.. conda:recipe:: pyrad
   :replaces_section_title:
   :noindex:

   Assembly and analysis of RADseq data sets

   :homepage: https://github.com/dereneaton/pyrad
   :license: GPLv3
   :recipe: /`pyrad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrad/meta.yaml>`_

   


.. conda:package:: pyrad

   |downloads_pyrad| |docker_pyrad|

   :versions:
      
      

      ``3.0.66-3``,  ``3.0.66-2``,  ``3.0.66-0``,  ``3.0.64-0``

      

   
   :depends muscle: 
   :depends numpy: 
   :depends python: ``<3``
   :depends scipy: 
   :depends vsearch: 
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

      mamba install pyrad

   and update with::

      mamba update pyrad

  To create a new environment, run::

      mamba create --name myenvname pyrad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyrad:<tag>

   (see `pyrad/tags`_ for valid values for ``<tag>``)


.. |downloads_pyrad| image:: https://img.shields.io/conda/dn/bioconda/pyrad.svg?style=flat
   :target: https://anaconda.org/bioconda/pyrad
   :alt:   (downloads)
.. |docker_pyrad| image:: https://quay.io/repository/biocontainers/pyrad/status
   :target: https://quay.io/repository/biocontainers/pyrad
.. _`pyrad/tags`: https://quay.io/repository/biocontainers/pyrad?tab=tags


.. raw:: html

    <script>
        var package = "pyrad";
        var versions = ["3.0.66","3.0.66","3.0.66","3.0.64"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrad/README.html