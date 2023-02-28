:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pifcosm'
.. highlight: bash

pifcosm
=======

.. conda:recipe:: pifcosm
   :replaces_section_title:
   :noindex:

   PisCoSm is a pipeline to construct supermatrix trees from GenBank data

   :homepage: https://github.com/RybergGroup/PifCoSm
   :license: GPL-3.0-only
   :recipe: /`pifcosm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pifcosm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pifcosm/meta.yaml>`_
   :links: doi: :doi:`10.1073/pnas.1922539117`

   


.. conda:package:: pifcosm

   |downloads_pifcosm| |docker_pifcosm|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends cd-hit: 
   :depends fasttree: 
   :depends gblocks: 
   :depends hmmer: 
   :depends mafft: 
   :depends muscle: 
   :depends perl: 
   :depends perl-dbd-sqlite: 
   :depends perl-dbi: 
   :depends phylommand: 
   :depends raxml: 
   :depends roguenarok: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pifcosm

   and update with::

      conda update pifcosm

   or use the docker container::

      docker pull quay.io/biocontainers/pifcosm:<tag>

   (see `pifcosm/tags`_ for valid values for ``<tag>``)


.. |downloads_pifcosm| image:: https://img.shields.io/conda/dn/bioconda/pifcosm.svg?style=flat
   :target: https://anaconda.org/bioconda/pifcosm
   :alt:   (downloads)
.. |docker_pifcosm| image:: https://quay.io/repository/biocontainers/pifcosm/status
   :target: https://quay.io/repository/biocontainers/pifcosm
.. _`pifcosm/tags`: https://quay.io/repository/biocontainers/pifcosm?tab=tags


.. raw:: html

    <script>
        var package = "pifcosm";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pifcosm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pifcosm/README.html