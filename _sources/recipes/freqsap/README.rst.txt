:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'freqsap'
.. highlight: bash

freqsap
=======

.. conda:recipe:: freqsap
   :replaces_section_title:
   :noindex:

   freqsap can be used to query the frequency of single amino\-acid polymorphisms

   :homepage: https://github.com/RECETOX/freqsap
   :license: MIT
   :recipe: /`freqsap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freqsap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freqsap/meta.yaml>`_

   


.. conda:package:: freqsap

   |downloads_freqsap| |docker_freqsap|

   :versions:
      
      

      ``1.1.0-0``,  ``0.1.0-0``

      

   
   :depends openpyxl: 
   :depends python: ``>=3.8``
   :depends requests: 
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

      mamba install freqsap

   and update with::

      mamba update freqsap

  To create a new environment, run::

      mamba create --name myenvname freqsap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/freqsap:<tag>

   (see `freqsap/tags`_ for valid values for ``<tag>``)


.. |downloads_freqsap| image:: https://img.shields.io/conda/dn/bioconda/freqsap.svg?style=flat
   :target: https://anaconda.org/bioconda/freqsap
   :alt:   (downloads)
.. |docker_freqsap| image:: https://quay.io/repository/biocontainers/freqsap/status
   :target: https://quay.io/repository/biocontainers/freqsap
.. _`freqsap/tags`: https://quay.io/repository/biocontainers/freqsap?tab=tags


.. raw:: html

    <script>
        var package = "freqsap";
        var versions = ["1.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/freqsap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/freqsap/README.html