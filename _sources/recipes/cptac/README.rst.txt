:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cptac'
.. highlight: bash

cptac
=====

.. conda:recipe:: cptac
   :replaces_section_title:
   :noindex:

   Python packaging for CPTAC data

   :homepage: https://pypi.org/project/cptac/
   :documentation: https://paynelab.github.io/cptac/
   
   :developer docs: https://github.com/PayneLab/cptac
   :license: Apache-2.0
   :recipe: /`cptac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cptac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cptac/meta.yaml>`_
   :links: biotools: :biotools:`cptac`, doi: :doi:`10.1021/acs.jproteome.0c00919`

   


.. conda:package:: cptac

   |downloads_cptac| |docker_cptac|

   :versions:
      
      

      ``1.5.1-0``,  ``1.5.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0rc1-0``,  ``0.9.7-0``,  ``0.9.6-0``

      

   
   :depends beautifulsoup4: ``>=4.7.1``
   :depends flask: ``>=1.1.0``
   :depends gtfparse: ``>=1.2.1``
   :depends mygene: ``>=3.2.2``
   :depends numpy: ``>=1.16.3``
   :depends openpyxl: ``>=2.6.0``
   :depends packaging: ``>=19.2``
   :depends pandas: ``>=1.2.0``
   :depends pyranges: 
   :depends python: ``>=3.6``
   :depends requests: ``>=2.21.0``
   :depends scipy: ``>=1.2.1``
   :depends statsmodels: ``>=0.10.0``
   :depends tqdm: 
   :depends urllib3: ``>=1.24.2``
   :depends xlrd: ``>=2.0.1``
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

      mamba install cptac

   and update with::

      mamba update cptac

  To create a new environment, run::

      mamba create --name myenvname cptac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cptac:<tag>

   (see `cptac/tags`_ for valid values for ``<tag>``)


.. |downloads_cptac| image:: https://img.shields.io/conda/dn/bioconda/cptac.svg?style=flat
   :target: https://anaconda.org/bioconda/cptac
   :alt:   (downloads)
.. |docker_cptac| image:: https://quay.io/repository/biocontainers/cptac/status
   :target: https://quay.io/repository/biocontainers/cptac
.. _`cptac/tags`: https://quay.io/repository/biocontainers/cptac?tab=tags


.. raw:: html

    <script>
        var package = "cptac";
        var versions = ["1.5.1","1.5.0","1.1.2","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cptac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cptac/README.html