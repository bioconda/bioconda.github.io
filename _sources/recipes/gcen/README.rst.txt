:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gcen'
.. highlight: bash

gcen
====

.. conda:recipe:: gcen
   :replaces_section_title:
   :noindex:

   An easy toolkit of Gene Co\-Expression Network analysis for lncRNAs annotation

   :homepage: https://www.biochen.org/gcen
   :license: GPL v3
   :recipe: /`gcen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcen/meta.yaml>`_
   :links: biotools: :biotools:`gcen`

   GCEN is a command\-line toolkit that allows biologists to easily build gene co\-expression network and predict gene function\, especially in RNA\-Seq research or lncRNAs annotation. GCEN is primarily designed to be used in lncRNAs annotation\, but is not limited to those scenarios. It is an efficient and easy\-to\-use solution that will allow everyone to perform gene co\-expression network analysis without sophisticated programming skills. The recommended pipeline consists of four parts\: data pretreatment\, network construction\, module identification\, and function annotation. A README file and sample data are included in the software package. Because of its modular design\, the GCEN can be easily integrated into another pipeline. Also\, the multithreaded implementation of GCEN makes it fast and efficient for RNA\-Seq data.


.. conda:package:: gcen

   |downloads_gcen| |docker_gcen|

   :versions:
      
      

      ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gcen

   and update with::

      conda update gcen

   or use the docker container::

      docker pull quay.io/biocontainers/gcen:<tag>

   (see `gcen/tags`_ for valid values for ``<tag>``)


.. |downloads_gcen| image:: https://img.shields.io/conda/dn/bioconda/gcen.svg?style=flat
   :target: https://anaconda.org/bioconda/gcen
   :alt:   (downloads)
.. |docker_gcen| image:: https://quay.io/repository/biocontainers/gcen/status
   :target: https://quay.io/repository/biocontainers/gcen
.. _`gcen/tags`: https://quay.io/repository/biocontainers/gcen?tab=tags


.. raw:: html

    <script>
        var package = "gcen";
        var versions = ["0.6.2","0.6.1","0.6.0","0.5.2","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gcen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gcen/README.html