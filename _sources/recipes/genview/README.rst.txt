:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genview'
.. highlight: bash

genview
=======

.. conda:recipe:: genview
   :replaces_section_title:
   :noindex:

   Gene\-centric visualization tool for genomic sequences

   :homepage: https://github.com/EbmeyerSt/GEnView.git
   :license: GPL-3.0-or-later
   :recipe: /`genview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genview/meta.yaml>`_

   


.. conda:package:: genview

   |downloads_genview| |docker_genview|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends biopython: ``>=1.68``
   :depends blast: 
   :depends cd-hit: 
   :depends diamond: 
   :depends fasttree: 
   :depends numpy: 
   :depends pandas: 
   :depends prodigal: 
   :depends python: ``>=3``
   :depends sqlite: ``>=3.36.0,<4.0a0``
   :depends time: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genview

   and update with::

      conda update genview

   or use the docker container::

      docker pull quay.io/biocontainers/genview:<tag>

   (see `genview/tags`_ for valid values for ``<tag>``)


.. |downloads_genview| image:: https://img.shields.io/conda/dn/bioconda/genview.svg?style=flat
   :target: https://anaconda.org/bioconda/genview
   :alt:   (downloads)
.. |docker_genview| image:: https://quay.io/repository/biocontainers/genview/status
   :target: https://quay.io/repository/biocontainers/genview
.. _`genview/tags`: https://quay.io/repository/biocontainers/genview?tab=tags


.. raw:: html

    <script>
        var package = "genview";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genview/README.html