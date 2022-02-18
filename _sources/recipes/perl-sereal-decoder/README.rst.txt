:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sereal-decoder'
.. highlight: bash

perl-sereal-decoder
===================

.. conda:recipe:: perl-sereal-decoder
   :replaces_section_title:
   :noindex:

   Fast\, compact\, powerful binary deserialization

   :homepage: http://metacpan.org/pod/Sereal::Decoder
   :license: perl_5
   :recipe: /`perl-sereal-decoder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sereal-decoder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sereal-decoder/meta.yaml>`_

   


.. conda:package:: perl-sereal-decoder

   |downloads_perl-sereal-decoder| |docker_perl-sereal-decoder|

   :versions:
      
      

      ``4.020-0``,  ``4.019-0``,  ``4.007-1``,  ``4.007-0``,  ``4.005-0``,  ``3.015-1``,  ``3.015-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sereal-decoder

   and update with::

      conda update perl-sereal-decoder

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sereal-decoder:<tag>

   (see `perl-sereal-decoder/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sereal-decoder| image:: https://img.shields.io/conda/dn/bioconda/perl-sereal-decoder.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sereal-decoder
   :alt:   (downloads)
.. |docker_perl-sereal-decoder| image:: https://quay.io/repository/biocontainers/perl-sereal-decoder/status
   :target: https://quay.io/repository/biocontainers/perl-sereal-decoder
.. _`perl-sereal-decoder/tags`: https://quay.io/repository/biocontainers/perl-sereal-decoder?tab=tags


.. raw:: html

    <script>
        var package = "perl-sereal-decoder";
        var versions = ["4.020","4.019","4.007","4.007","4.005"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sereal-decoder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sereal-decoder/README.html