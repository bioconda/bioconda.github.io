:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hint'
.. highlight: bash

hint
====

.. conda:recipe:: hint
   :replaces_section_title:
   :noindex:

   HiNT is a computational method for detecting copy number variations and translocations from Hi\-C data

   :homepage: https://github.com/parklab/HiNT
   :license: MIT
   :recipe: /`hint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hint/meta.yaml>`_

   


.. conda:package:: hint

   |downloads_hint| |docker_hint|

   :versions:
      
      

      ``2.2.8-1``,  ``2.2.8-0``,  ``2.2.7-1``,  ``2.2.7-0``,  ``2.2.1-0``,  ``2.1.9-1``,  ``2.1.9-0``,  ``2.1.7-0``,  ``2.0.1-0``

      

   
   :depends argparse: ``>=1.1``
   :depends bwa: ``>=0.7.16``
   :depends cooler: ``0.8.3``
   :depends h5py: ``>=2.8.0``
   :depends htslib: ``>=1.10``
   :depends multiprocess: ``>=0.70.5``
   :depends numpy: ``>=1.16.1``
   :depends openjdk: ``>=8``
   :depends pairix: ``>=0.3.6``
   :depends pairtools: ``>=0.2.2``
   :depends pandas: ``>=0.23.0``
   :depends perl: ``>=5``
   :depends pytabix: 
   :depends python: ``>=3.5``
   :depends r: ``>=3.4``
   :depends r-base: 
   :depends r-cairo: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-mgcv: 
   :depends r-strucchange: 
   :depends samtools: ``>=1.10``
   :depends scikit-learn: ``>=0.19.1``
   :depends scipy: ``>=1.0.1``
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

      mamba install hint

   and update with::

      mamba update hint

  To create a new environment, run::

      mamba create --name myenvname hint

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hint:<tag>

   (see `hint/tags`_ for valid values for ``<tag>``)


.. |downloads_hint| image:: https://img.shields.io/conda/dn/bioconda/hint.svg?style=flat
   :target: https://anaconda.org/bioconda/hint
   :alt:   (downloads)
.. |docker_hint| image:: https://quay.io/repository/biocontainers/hint/status
   :target: https://quay.io/repository/biocontainers/hint
.. _`hint/tags`: https://quay.io/repository/biocontainers/hint?tab=tags


.. raw:: html

    <script>
        var package = "hint";
        var versions = ["2.2.8","2.2.8","2.2.7","2.2.7","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hint/README.html