:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aodp'
.. highlight: bash

aodp
====

.. conda:recipe:: aodp
   :replaces_section_title:
   :noindex:

   Cluster oligonucleotide signatures for rapid identification by sequencing

   :homepage: https://github.com/peterk87/aodp
   :license: GPL-3.0-only
   :recipe: /`aodp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aodp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aodp/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-018-2363-3`

   


.. conda:package:: aodp

   |downloads_aodp| |docker_aodp|

   :versions:
      
      

      ``2.5.0.2-1``,  ``2.5.0.2-0``,  ``2.5.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bioperl: ``>=1.7.2``
   :depends perl-list-moreutils: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aodp

   and update with::

      conda update aodp

   or use the docker container::

      docker pull quay.io/biocontainers/aodp:<tag>

   (see `aodp/tags`_ for valid values for ``<tag>``)


.. |downloads_aodp| image:: https://img.shields.io/conda/dn/bioconda/aodp.svg?style=flat
   :target: https://anaconda.org/bioconda/aodp
   :alt:   (downloads)
.. |docker_aodp| image:: https://quay.io/repository/biocontainers/aodp/status
   :target: https://quay.io/repository/biocontainers/aodp
.. _`aodp/tags`: https://quay.io/repository/biocontainers/aodp?tab=tags


.. raw:: html

    <script>
        var package = "aodp";
        var versions = ["2.5.0.2","2.5.0.2","2.5.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aodp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aodp/README.html