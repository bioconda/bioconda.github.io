:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gd-svg'
.. highlight: bash

perl-gd-svg
===========

.. conda:recipe:: perl-gd-svg
   :replaces_section_title:

   Seamlessly enable SVG output from scripts written using GD

   :homepage: http://metacpan.org/pod/GD::SVG
   :license: perl_5
   :recipe: /`perl-gd-svg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gd-svg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gd-svg/meta.yaml>`_

   


.. conda:package:: perl-gd-svg

   |downloads_perl-gd-svg| |docker_perl-gd-svg|

   :versions: 0.33-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-gd: 
   :depends perl-svg: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-gd-svg

   and update with::

      conda update perl-gd-svg

   or use the docker container::

      docker pull quay.io/biocontainers/perl-gd-svg:<tag>

   (see `perl-gd-svg/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-gd-svg| image:: https://img.shields.io/conda/dn/bioconda/perl-gd-svg.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-gd-svg
   :alt:   (downloads)
.. |docker_perl-gd-svg| image:: https://quay.io/repository/biocontainers/perl-gd-svg/status
   :target: https://quay.io/repository/biocontainers/perl-gd-svg
.. _`perl-gd-svg/tags`: https://quay.io/repository/biocontainers/perl-gd-svg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gd-svg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gd-svg/README.html