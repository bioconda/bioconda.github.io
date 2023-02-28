:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sshmm'
.. highlight: bash

sshmm
=====

.. conda:recipe:: sshmm
   :replaces_section_title:
   :noindex:

   ssHMM is an RNA motif finder that recovers sequence\-structure motifs from RNA\-binding protein data\, such as CLIP\-Seq data.

   :homepage: https://github.molgen.mpg.de/heller/ssHMM
   :license: GPL-3.0
   :recipe: /`sshmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sshmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sshmm/meta.yaml>`_

   


.. conda:package:: sshmm

   |downloads_sshmm| |docker_sshmm|

   :versions:
      
      

      ``1.0.7-4``,  ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``

      

   
   :depends bedtools: 
   :depends forgi: 
   :depends ghmm: 
   :depends graphviz: ``>=2.40.1,<3.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libxml2: ``>=2.9.10,<2.10.0a0``
   :depends numpy: ``1.11.*``
   :depends pygraphviz: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends rnashapes: ``2.1.6.*``
   :depends rnastructure: 
   :depends weblogo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sshmm

   and update with::

      conda update sshmm

   or use the docker container::

      docker pull quay.io/biocontainers/sshmm:<tag>

   (see `sshmm/tags`_ for valid values for ``<tag>``)


.. |downloads_sshmm| image:: https://img.shields.io/conda/dn/bioconda/sshmm.svg?style=flat
   :target: https://anaconda.org/bioconda/sshmm
   :alt:   (downloads)
.. |docker_sshmm| image:: https://quay.io/repository/biocontainers/sshmm/status
   :target: https://quay.io/repository/biocontainers/sshmm
.. _`sshmm/tags`: https://quay.io/repository/biocontainers/sshmm?tab=tags


.. raw:: html

    <script>
        var package = "sshmm";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sshmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sshmm/README.html