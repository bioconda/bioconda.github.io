:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'syngap'
.. highlight: bash

syngap
======

.. conda:recipe:: syngap
   :replaces_section_title:
   :noindex:

   SynGAP\: Synteny\-based Genome Annotations Polisher

   :homepage: https://github.com/yanyew/SynGAP
   :license: CC-BY-NC-SA-4.0
   :recipe: /`syngap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syngap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syngap/meta.yaml>`_

   


.. conda:package:: syngap

   |downloads_syngap| |docker_syngap|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bedtools: ``>=2.31.0``
   :depends biopython: ``>=1.81``
   :depends crossmap: 
   :depends deap: ``>=1.4.1``
   :depends diamond: ``>=2.1.8``
   :depends emboss: ``>=6.6.0``
   :depends gffread: ``>=0.12.7``
   :depends graphviz: 
   :depends jcvi: ``>=1.3.6``
   :depends kneed: ``>=0.8.3``
   :depends last: ``>=1454``
   :depends matplotlib-base: ``>=3.8.0``
   :depends more-itertools: 
   :depends numpy: ``>=1.26.0``
   :depends ortools-python: 
   :depends pandas: ``>=2.1.1``
   :depends perl-bioperl: ``>=1.7.8``
   :depends pybedtools: ``>=0.9.0``
   :depends python: ``>=3.10``
   :depends scikit-image: ``>=0.22.0``
   :depends seqkit: ``>=2.4.0``
   :depends webcolors: 
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

      mamba install syngap

   and update with::

      mamba update syngap

  To create a new environment, run::

      mamba create --name myenvname syngap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/syngap:<tag>

   (see `syngap/tags`_ for valid values for ``<tag>``)


.. |downloads_syngap| image:: https://img.shields.io/conda/dn/bioconda/syngap.svg?style=flat
   :target: https://anaconda.org/bioconda/syngap
   :alt:   (downloads)
.. |docker_syngap| image:: https://quay.io/repository/biocontainers/syngap/status
   :target: https://quay.io/repository/biocontainers/syngap
.. _`syngap/tags`: https://quay.io/repository/biocontainers/syngap?tab=tags


.. raw:: html

    <script>
        var package = "syngap";
        var versions = ["1.1.0","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/syngap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/syngap/README.html