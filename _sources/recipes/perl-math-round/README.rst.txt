:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-round'
.. highlight: bash

perl-math-round
===============

.. conda:recipe:: perl-math-round
   :replaces_section_title:
   :noindex:

   Perl extension for rounding numbers

   :homepage: http://metacpan.org/pod/Math-Round
   :license: unknown
   :recipe: /`perl-math-round <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-round>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-round/meta.yaml>`_

   


.. conda:package:: perl-math-round

   |downloads_perl-math-round| |docker_perl-math-round|

   :versions:
      
      

      ``0.07-2``,  ``0.07-1``,  ``0.07-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-math-round

   and update with::

      conda update perl-math-round

   or use the docker container::

      docker pull quay.io/biocontainers/perl-math-round:<tag>

   (see `perl-math-round/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-round| image:: https://img.shields.io/conda/dn/bioconda/perl-math-round.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-round
   :alt:   (downloads)
.. |docker_perl-math-round| image:: https://quay.io/repository/biocontainers/perl-math-round/status
   :target: https://quay.io/repository/biocontainers/perl-math-round
.. _`perl-math-round/tags`: https://quay.io/repository/biocontainers/perl-math-round?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-round";
        var versions = ["0.07","0.07","0.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-round/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-round/README.html