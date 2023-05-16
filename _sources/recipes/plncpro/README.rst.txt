:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plncpro'
.. highlight: bash

plncpro
=======

.. conda:recipe:: plncpro
   :replaces_section_title:
   :noindex:

   PlncPRO is a program to predict long non\-coding \(lncRNAs\) transcripts using Random Forests.

   :homepage: https://github.com/urmi-21/PLncPRO
   :license: GNU General Public License
   :recipe: /`plncpro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plncpro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plncpro/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkx866`

   


.. conda:package:: plncpro

   |downloads_plncpro| |docker_plncpro|

   :versions:
      
      

      ``1.2.2-4``,  ``1.2.2-3``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``

      

   
   :depends biopython: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends regex: 
   :depends scikit-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plncpro

   and update with::

      conda update plncpro

   or use the docker container::

      docker pull quay.io/biocontainers/plncpro:<tag>

   (see `plncpro/tags`_ for valid values for ``<tag>``)


.. |downloads_plncpro| image:: https://img.shields.io/conda/dn/bioconda/plncpro.svg?style=flat
   :target: https://anaconda.org/bioconda/plncpro
   :alt:   (downloads)
.. |docker_plncpro| image:: https://quay.io/repository/biocontainers/plncpro/status
   :target: https://quay.io/repository/biocontainers/plncpro
.. _`plncpro/tags`: https://quay.io/repository/biocontainers/plncpro?tab=tags


.. raw:: html

    <script>
        var package = "plncpro";
        var versions = ["1.2.2","1.2.2","1.2.2","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plncpro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plncpro/README.html