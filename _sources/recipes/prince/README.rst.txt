:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prince'
.. highlight: bash

prince
======

.. conda:recipe:: prince
   :replaces_section_title:
   :noindex:

   PRINCE estimates Variable Number Tandem Repeats \(VNTR\) copy number from raw next generation sequencing \(NGS\) data.

   :homepage: https://github.com/WGS-TB/PythonPrince
   :license: MIT
   :recipe: /`prince <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prince>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prince/meta.yaml>`_

   


.. conda:package:: prince

   |downloads_prince| |docker_prince|

   :versions:
      
      

      ``2.3-1``,  ``2.3-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends python: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install prince

   and update with::

      mamba update prince

  To create a new environment, run::

      mamba create --name myenvname prince

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prince:<tag>

   (see `prince/tags`_ for valid values for ``<tag>``)


.. |downloads_prince| image:: https://img.shields.io/conda/dn/bioconda/prince.svg?style=flat
   :target: https://anaconda.org/bioconda/prince
   :alt:   (downloads)
.. |docker_prince| image:: https://quay.io/repository/biocontainers/prince/status
   :target: https://quay.io/repository/biocontainers/prince
.. _`prince/tags`: https://quay.io/repository/biocontainers/prince?tab=tags


.. raw:: html

    <script>
        var package = "prince";
        var versions = ["2.3","2.3","2.2","2.1","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prince/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prince/README.html