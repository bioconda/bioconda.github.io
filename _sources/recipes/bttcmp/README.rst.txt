:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bttcmp'
.. highlight: bash

bttcmp
======

.. conda:recipe:: bttcmp
   :replaces_section_title:
   :noindex:

   A toxin minging tool for Bacillus thuringiensis

   :homepage: https://github.com/liaochenlanruo/BTTCMP/blob/master/README.md
   :developer docs: https://github.com/liaochenlanruo/BTTCMP/tree/master
   :license: GPL / GPLv3
   :recipe: /`bttcmp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bttcmp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bttcmp/meta.yaml>`_
   :links: biotools: :biotools:`bttcmp`

   


.. conda:package:: bttcmp

   |downloads_bttcmp| |docker_bttcmp|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends blast: 
   :depends hmmer: 
   :depends libsvm: 
   :depends perl-file-tee: 
   :depends perl-getopt-long: 
   :depends perl-pod-usage: 
   :depends pgcgap: ``>=1.0.14``
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

      mamba install bttcmp

   and update with::

      mamba update bttcmp

  To create a new environment, run::

      mamba create --name myenvname bttcmp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bttcmp:<tag>

   (see `bttcmp/tags`_ for valid values for ``<tag>``)


.. |downloads_bttcmp| image:: https://img.shields.io/conda/dn/bioconda/bttcmp.svg?style=flat
   :target: https://anaconda.org/bioconda/bttcmp
   :alt:   (downloads)
.. |docker_bttcmp| image:: https://quay.io/repository/biocontainers/bttcmp/status
   :target: https://quay.io/repository/biocontainers/bttcmp
.. _`bttcmp/tags`: https://quay.io/repository/biocontainers/bttcmp?tab=tags


.. raw:: html

    <script>
        var package = "bttcmp";
        var versions = ["1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bttcmp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bttcmp/README.html