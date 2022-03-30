:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-trigger'
.. highlight: bash

perl-class-trigger
==================

.. conda:recipe:: perl-class-trigger
   :replaces_section_title:
   :noindex:

   Mixin to add \/ call inheritable triggers

   :homepage: https://github.com/miyagawa/Class-Trigger
   :license: perl_5
   :recipe: /`perl-class-trigger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-trigger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-trigger/meta.yaml>`_

   


.. conda:package:: perl-class-trigger

   |downloads_perl-class-trigger| |docker_perl-class-trigger|

   :versions:
      
      

      ``0.15-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-io-stringy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-class-trigger

   and update with::

      conda update perl-class-trigger

   or use the docker container::

      docker pull quay.io/biocontainers/perl-class-trigger:<tag>

   (see `perl-class-trigger/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-trigger| image:: https://img.shields.io/conda/dn/bioconda/perl-class-trigger.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-class-trigger
   :alt:   (downloads)
.. |docker_perl-class-trigger| image:: https://quay.io/repository/biocontainers/perl-class-trigger/status
   :target: https://quay.io/repository/biocontainers/perl-class-trigger
.. _`perl-class-trigger/tags`: https://quay.io/repository/biocontainers/perl-class-trigger?tab=tags


.. raw:: html

    <script>
        var package = "perl-class-trigger";
        var versions = ["0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-trigger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-trigger/README.html