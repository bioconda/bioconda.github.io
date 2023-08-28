:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'exparna'
.. highlight: bash

exparna
=======

.. conda:recipe:: exparna
   :replaces_section_title:
   :noindex:

   The program finds the longest common subsequence of exact pattern matches \(LCS\-EPM\)

   :homepage: https://github.com/BackofenLab/ExpaRNA
   :license: GPL-2.0
   :recipe: /`exparna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/exparna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/exparna/meta.yaml>`_
   :links: biotools: :biotools:`exparna`

   


.. conda:package:: exparna

   |downloads_exparna| |docker_exparna|

   :versions:
      
      

      ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends viennarna: ``>=2.5.1,<2.6.0a0``
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

      mamba install exparna

   and update with::

      mamba update exparna

  To create a new environment, run::

      mamba create --name myenvname exparna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/exparna:<tag>

   (see `exparna/tags`_ for valid values for ``<tag>``)


.. |downloads_exparna| image:: https://img.shields.io/conda/dn/bioconda/exparna.svg?style=flat
   :target: https://anaconda.org/bioconda/exparna
   :alt:   (downloads)
.. |docker_exparna| image:: https://quay.io/repository/biocontainers/exparna/status
   :target: https://quay.io/repository/biocontainers/exparna
.. _`exparna/tags`: https://quay.io/repository/biocontainers/exparna?tab=tags


.. raw:: html

    <script>
        var package = "exparna";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/exparna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/exparna/README.html