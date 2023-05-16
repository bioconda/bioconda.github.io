:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-role-withoverloading'
.. highlight: bash

perl-moosex-role-withoverloading
================================

.. conda:recipe:: perl-moosex-role-withoverloading
   :replaces_section_title:
   :noindex:

   \(DEPRECATED\) Roles which support overloading

   :homepage: https://github.com/moose/MooseX-Role-WithOverloading
   :license: perl_5
   :recipe: /`perl-moosex-role-withoverloading <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-role-withoverloading>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-role-withoverloading/meta.yaml>`_

   


.. conda:package:: perl-moosex-role-withoverloading

   |downloads_perl-moosex-role-withoverloading| |docker_perl-moosex-role-withoverloading|

   :versions:
      
      

      ``0.17-5``,  ``0.17-4``,  ``0.17-3``,  ``0.17-2``,  ``0.17-1``,  ``0.17-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-aliased: 
   :depends perl-class-load: ``0.25.*``
   :depends perl-devel-globaldestruction: ``0.14.*``
   :depends perl-devel-overloadinfo: ``0.007.*``
   :depends perl-eval-closure: ``0.14.*``
   :depends perl-moose: ``2.2201.*``
   :depends perl-mro-compat: ``0.15.*``
   :depends perl-namespace-autoclean: 
   :depends perl-namespace-clean: ``0.27.*``
   :depends perl-package-deprecationmanager: ``0.18.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moosex-role-withoverloading

   and update with::

      conda update perl-moosex-role-withoverloading

   or use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-role-withoverloading:<tag>

   (see `perl-moosex-role-withoverloading/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-role-withoverloading| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-role-withoverloading.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-role-withoverloading
   :alt:   (downloads)
.. |docker_perl-moosex-role-withoverloading| image:: https://quay.io/repository/biocontainers/perl-moosex-role-withoverloading/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-role-withoverloading
.. _`perl-moosex-role-withoverloading/tags`: https://quay.io/repository/biocontainers/perl-moosex-role-withoverloading?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-role-withoverloading";
        var versions = ["0.17","0.17","0.17","0.17","0.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-role-withoverloading/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-role-withoverloading/README.html