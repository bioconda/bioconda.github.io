:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-complex'
.. highlight: bash

perl-math-complex
=================

.. conda:recipe:: perl-math-complex
   :replaces_section_title:
   :noindex:

   trigonometric functions

   :homepage: http://metacpan.org/pod/Math::Complex
   :license: perl_5
   :recipe: /`perl-math-complex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-complex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-complex/meta.yaml>`_

   


.. conda:package:: perl-math-complex

   |downloads_perl-math-complex| |docker_perl-math-complex|

   :versions:
      
      

      ``1.59-1``,  ``1.59-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-exporter: 
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

      mamba install perl-math-complex

   and update with::

      mamba update perl-math-complex

  To create a new environment, run::

      mamba create --name myenvname perl-math-complex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-math-complex:<tag>

   (see `perl-math-complex/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-complex| image:: https://img.shields.io/conda/dn/bioconda/perl-math-complex.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-complex
   :alt:   (downloads)
.. |docker_perl-math-complex| image:: https://quay.io/repository/biocontainers/perl-math-complex/status
   :target: https://quay.io/repository/biocontainers/perl-math-complex
.. _`perl-math-complex/tags`: https://quay.io/repository/biocontainers/perl-math-complex?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-complex";
        var versions = ["1.59","1.59"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-complex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-complex/README.html