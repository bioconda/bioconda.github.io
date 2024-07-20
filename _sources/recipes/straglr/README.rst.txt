:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'straglr'
.. highlight: bash

straglr
=======

.. conda:recipe:: straglr
   :replaces_section_title:
   :noindex:

   Short\-tandem repeat genotyping using long reads 

   :homepage: https://github.com/bcgsc/straglr
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`straglr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/straglr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/straglr/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-021-02447-3`

   


.. conda:package:: straglr

   |downloads_straglr| |docker_straglr|

   :versions:
      
      

      ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.1-0``

      

   
   :depends blast: 
   :depends intspan: ``>=1.5.8``
   :depends numpy: ``>=1.22.3``
   :depends pathos: ``>=0.2.3``
   :depends pybedtools: ``>=0.9.0``
   :depends pysam: ``>=0.14.0``
   :depends python: ``>=3.7``
   :depends scikit-learn: ``>=1.1``
   :depends scipy: ``>=1.8.0``
   :depends trf: 
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

      mamba install straglr

   and update with::

      mamba update straglr

  To create a new environment, run::

      mamba create --name myenvname straglr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/straglr:<tag>

   (see `straglr/tags`_ for valid values for ``<tag>``)


.. |downloads_straglr| image:: https://img.shields.io/conda/dn/bioconda/straglr.svg?style=flat
   :target: https://anaconda.org/bioconda/straglr
   :alt:   (downloads)
.. |docker_straglr| image:: https://quay.io/repository/biocontainers/straglr/status
   :target: https://quay.io/repository/biocontainers/straglr
.. _`straglr/tags`: https://quay.io/repository/biocontainers/straglr?tab=tags


.. raw:: html

    <script>
        var package = "straglr";
        var versions = ["1.5.1","1.5.0","1.4.1","1.4.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/straglr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/straglr/README.html