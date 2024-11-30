:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sanntis'
.. highlight: bash

sanntis
=======

.. conda:recipe:: sanntis
   :replaces_section_title:
   :noindex:

   SMBGC Annotation using Neural Networks Trained on Interpro Signatures

   :homepage: https://github.com/Finn-Lab/SanntiS
   :license: Apache / Apache-2.0
   :recipe: /`sanntis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sanntis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sanntis/meta.yaml>`_

   


.. conda:package:: sanntis

   |downloads_sanntis| |docker_sanntis|

   :versions:
      
      

      ``0.9.3.5-1``,  ``0.9.3.5-0``,  ``0.9.3.4-0``,  ``0.9.3.3-0``,  ``0.9.3.2-0``,  ``0.9.3.1-0``,  ``0.9.3-0``,  ``0.9.1-0``,  ``0.1.0-0``

      

   
   :depends biopython: 
   :depends hmmer: 
   :depends joblib: ``>=1.0.1``
   :depends numpy: ``>=1.16,<1.20``
   :depends openjdk: ``>=11.0``
   :depends perl: ``>=5``
   :depends prodigal: 
   :depends python: ``>=3.9``
   :depends scikit-learn: ``0.24.*``
   :depends scipy: ``>=1.7.3,<1.8.0``
   :depends tensorflow: ``2.4.*``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sanntis

   and update with::

      mamba update sanntis

  To create a new environment, run::

      mamba create --name myenvname sanntis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sanntis:<tag>

   (see `sanntis/tags`_ for valid values for ``<tag>``)


.. |downloads_sanntis| image:: https://img.shields.io/conda/dn/bioconda/sanntis.svg?style=flat
   :target: https://anaconda.org/bioconda/sanntis
   :alt:   (downloads)
.. |docker_sanntis| image:: https://quay.io/repository/biocontainers/sanntis/status
   :target: https://quay.io/repository/biocontainers/sanntis
.. _`sanntis/tags`: https://quay.io/repository/biocontainers/sanntis?tab=tags


.. raw:: html

    <script>
        var package = "sanntis";
        var versions = ["0.9.3.5","0.9.3.5","0.9.3.4","0.9.3.3","0.9.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sanntis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sanntis/README.html