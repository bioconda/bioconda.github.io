:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-scalar-util-numeric'
.. highlight: bash

perl-scalar-util-numeric
========================

.. conda:recipe:: perl-scalar-util-numeric
   :replaces_section_title:
   :noindex:

   numeric tests for perl scalars

   :homepage: http://metacpan.org/pod/Scalar-Util-Numeric
   :license: perl_5
   :recipe: /`perl-scalar-util-numeric <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-scalar-util-numeric>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-scalar-util-numeric/meta.yaml>`_

   


.. conda:package:: perl-scalar-util-numeric

   |downloads_perl-scalar-util-numeric| |docker_perl-scalar-util-numeric|

   :versions:
      
      

      ``0.40-4``,  ``0.40-3``,  ``0.40-2``,  ``0.40-1``,  ``0.40-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-scalar-util-numeric

   and update with::

      conda update perl-scalar-util-numeric

   or use the docker container::

      docker pull quay.io/biocontainers/perl-scalar-util-numeric:<tag>

   (see `perl-scalar-util-numeric/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-scalar-util-numeric| image:: https://img.shields.io/conda/dn/bioconda/perl-scalar-util-numeric.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-scalar-util-numeric
   :alt:   (downloads)
.. |docker_perl-scalar-util-numeric| image:: https://quay.io/repository/biocontainers/perl-scalar-util-numeric/status
   :target: https://quay.io/repository/biocontainers/perl-scalar-util-numeric
.. _`perl-scalar-util-numeric/tags`: https://quay.io/repository/biocontainers/perl-scalar-util-numeric?tab=tags


.. raw:: html

    <script>
        var package = "perl-scalar-util-numeric";
        var versions = ["0.40","0.40","0.40","0.40","0.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-scalar-util-numeric/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-scalar-util-numeric/README.html