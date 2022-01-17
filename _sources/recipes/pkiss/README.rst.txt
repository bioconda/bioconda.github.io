:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pkiss'
.. highlight: bash

pkiss
=====

.. conda:recipe:: pkiss
   :replaces_section_title:
   :noindex:

   RNA secondary structure prediction including K\-type and kissing hairpin\- pseudoknots.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/pkiss
   :license: GPLv3+
   :recipe: /`pkiss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pkiss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pkiss/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-642-15294-8_5`, doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: pkiss

   |downloads_pkiss| |docker_pkiss|

   :versions:
      
      

      ``2.2.14-1``,  ``2.2.14-0``,  ``2.2.12-5``,  ``2.2.12-4``,  ``2.2.12-3``,  ``2.2.12-1``,  ``2.2.12-0``

      

   
   :depends bellmans-gapc: ``>=2020.12.08``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pkiss

   and update with::

      conda update pkiss

   or use the docker container::

      docker pull quay.io/biocontainers/pkiss:<tag>

   (see `pkiss/tags`_ for valid values for ``<tag>``)


.. |downloads_pkiss| image:: https://img.shields.io/conda/dn/bioconda/pkiss.svg?style=flat
   :target: https://anaconda.org/bioconda/pkiss
   :alt:   (downloads)
.. |docker_pkiss| image:: https://quay.io/repository/biocontainers/pkiss/status
   :target: https://quay.io/repository/biocontainers/pkiss
.. _`pkiss/tags`: https://quay.io/repository/biocontainers/pkiss?tab=tags


.. raw:: html

    <script>
        var package = "pkiss";
        var versions = ["2.2.14","2.2.14","2.2.12","2.2.12","2.2.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pkiss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pkiss/README.html