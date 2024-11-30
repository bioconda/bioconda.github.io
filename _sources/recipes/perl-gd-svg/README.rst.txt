:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gd-svg'
.. highlight: bash

perl-gd-svg
===========

.. conda:recipe:: perl-gd-svg
   :replaces_section_title:
   :noindex:

   Seamlessly enable SVG output from scripts written using GD

   :homepage: http://metacpan.org/pod/GD::SVG
   :license: perl_5
   :recipe: /`perl-gd-svg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gd-svg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gd-svg/meta.yaml>`_

   


.. conda:package:: perl-gd-svg

   |downloads_perl-gd-svg| |docker_perl-gd-svg|

   :versions:
      
      

      ``0.33-2``,  ``0.33-1``,  ``0.33-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-gd: 
   :depends perl-svg: 
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

      mamba install perl-gd-svg

   and update with::

      mamba update perl-gd-svg

  To create a new environment, run::

      mamba create --name myenvname perl-gd-svg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-gd-svg:<tag>

   (see `perl-gd-svg/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-gd-svg| image:: https://img.shields.io/conda/dn/bioconda/perl-gd-svg.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-gd-svg
   :alt:   (downloads)
.. |docker_perl-gd-svg| image:: https://quay.io/repository/biocontainers/perl-gd-svg/status
   :target: https://quay.io/repository/biocontainers/perl-gd-svg
.. _`perl-gd-svg/tags`: https://quay.io/repository/biocontainers/perl-gd-svg?tab=tags


.. raw:: html

    <script>
        var package = "perl-gd-svg";
        var versions = ["0.33","0.33","0.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gd-svg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gd-svg/README.html