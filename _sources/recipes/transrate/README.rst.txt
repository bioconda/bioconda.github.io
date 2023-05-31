:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transrate'
.. highlight: bash

transrate
=========

.. conda:recipe:: transrate
   :replaces_section_title:
   :noindex:

   Reference free quality assessment of de\-novo transcriptome assemblies

   :homepage: https://github.com/blahah/transrate/
   :license: MIT
   :recipe: /`transrate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transrate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transrate/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.196469.115`

   


.. conda:package:: transrate

   |downloads_transrate| |docker_transrate|

   :versions:
      
      

      ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends blast: ``2.2.31.*``
   :depends boost: ``1.60.*``
   :depends libgcc-ng: ``>=12``
   :depends rb-bundler: 
   :depends ruby: ``>=2``
   :depends ruby: ``>=2.5.7,<2.6.0a0``
   :depends salmon: ``0.6.0.*``
   :depends snap-aligner: ``1.0dev.96.*``
   :depends transrate-tools: ``1.0.0.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install transrate

   and update with::

      conda update transrate

   or use the docker container::

      docker pull quay.io/biocontainers/transrate:<tag>

   (see `transrate/tags`_ for valid values for ``<tag>``)


.. |downloads_transrate| image:: https://img.shields.io/conda/dn/bioconda/transrate.svg?style=flat
   :target: https://anaconda.org/bioconda/transrate
   :alt:   (downloads)
.. |docker_transrate| image:: https://quay.io/repository/biocontainers/transrate/status
   :target: https://quay.io/repository/biocontainers/transrate
.. _`transrate/tags`: https://quay.io/repository/biocontainers/transrate?tab=tags


.. raw:: html

    <script>
        var package = "transrate";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transrate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transrate/README.html