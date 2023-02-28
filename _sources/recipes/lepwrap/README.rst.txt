:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lepwrap'
.. highlight: bash

lepwrap
=======

.. conda:recipe:: lepwrap
   :replaces_section_title:
   :noindex:

   The Snakemake pipeline to use Lep\-Map3 to create linkage maps and LepAnchor for anchoring\+orienting genome assemblies.

   :homepage: https://github.com/pdimens/LepWrap/
   :license: The GNU General Public License v3.0 (GPL3)
   :recipe: /`lepwrap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lepwrap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lepwrap/meta.yaml>`_

   


.. conda:package:: lepwrap

   |downloads_lepwrap| |docker_lepwrap|

   :versions:
      
      

      ``4.0.1-0``,  ``4.0-0``

      

   
   :depends bzip2: 
   :depends font-ttf-dejavu-sans-mono: 
   :depends font-ttf-ubuntu: 
   :depends graphviz: 
   :depends imagemagick: 
   :depends openjdk: 
   :depends pandoc: 
   :depends pygraphviz: 
   :depends python: ``>=3.9``
   :depends r-base: ``>=4``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-readr: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends sed: 
   :depends snakemake: ``>=6.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lepwrap

   and update with::

      conda update lepwrap

   or use the docker container::

      docker pull quay.io/biocontainers/lepwrap:<tag>

   (see `lepwrap/tags`_ for valid values for ``<tag>``)


.. |downloads_lepwrap| image:: https://img.shields.io/conda/dn/bioconda/lepwrap.svg?style=flat
   :target: https://anaconda.org/bioconda/lepwrap
   :alt:   (downloads)
.. |docker_lepwrap| image:: https://quay.io/repository/biocontainers/lepwrap/status
   :target: https://quay.io/repository/biocontainers/lepwrap
.. _`lepwrap/tags`: https://quay.io/repository/biocontainers/lepwrap?tab=tags


.. raw:: html

    <script>
        var package = "lepwrap";
        var versions = ["4.0.1","4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lepwrap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lepwrap/README.html