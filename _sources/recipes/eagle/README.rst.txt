:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eagle'
.. highlight: bash

eagle
=====

.. conda:recipe:: eagle
   :replaces_section_title:
   :noindex:

   Eagle is a webtool for genome variants and snp analysis

   :homepage: https://bitbucket.org/christopherschroeder/eagle
   :license: MIT / MIT License
   :recipe: /`eagle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eagle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eagle/meta.yaml>`_

   


.. conda:package:: eagle

   |downloads_eagle| |docker_eagle|

   :versions:
      
      

      ``0.9.4.6-0``,  ``0.9.3.3-3``,  ``0.9.3.3-2``,  ``0.9.3.3-0``,  ``0.9.0-0``

      

   
   :depends cyvcf2: 
   :depends flask: 
   :depends h5py: 
   :depends numpy: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends scipy: 
   :depends sqt: 
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

      mamba install eagle

   and update with::

      mamba update eagle

  To create a new environment, run::

      mamba create --name myenvname eagle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eagle:<tag>

   (see `eagle/tags`_ for valid values for ``<tag>``)


.. |downloads_eagle| image:: https://img.shields.io/conda/dn/bioconda/eagle.svg?style=flat
   :target: https://anaconda.org/bioconda/eagle
   :alt:   (downloads)
.. |docker_eagle| image:: https://quay.io/repository/biocontainers/eagle/status
   :target: https://quay.io/repository/biocontainers/eagle
.. _`eagle/tags`: https://quay.io/repository/biocontainers/eagle?tab=tags


.. raw:: html

    <script>
        var package = "eagle";
        var versions = ["0.9.4.6","0.9.3.3","0.9.3.3","0.9.3.3","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eagle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eagle/README.html