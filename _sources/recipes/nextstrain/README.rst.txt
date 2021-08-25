:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextstrain'
.. highlight: bash

nextstrain
==========

.. conda:recipe:: nextstrain
   :replaces_section_title:
   :noindex:

   Nextstrain toolchain \(meta\-package\)

   :homepage: https://nextstrain.org
   :documentation: https://docs.nextstrain.org/
   
   :developer docs: https://github.com/nextstrain/
   :license: The license for this meta-package is MIT; individual tools vary.

   :recipe: /`nextstrain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextstrain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextstrain/meta.yaml>`_

   Nextstrain is an open\-source project to harness the scientific and public health potential of pathogen genome data.  It includes a collection of open\-source tools to aid in our understanding of pathogen spread and evolution\, especially in outbreak scenarios.  These tools are designed to be used with a wide range of data sources and designed to be modular so they can be replaced with your own tooling when necessary.



.. conda:package:: nextstrain

   |downloads_nextstrain| |docker_nextstrain|

   :versions:
      
      

      ``20200304-1``,  ``20200304-0``

      

   
   :depends augur: 
   :depends auspice: 
   :depends awscli: 
   :depends git: 
   :depends nextalign: 
   :depends nextstrain-cli: 
   :depends pip: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nextstrain

   and update with::

      conda update nextstrain

   or use the docker container::

      docker pull quay.io/biocontainers/nextstrain:<tag>

   (see `nextstrain/tags`_ for valid values for ``<tag>``)


.. |downloads_nextstrain| image:: https://img.shields.io/conda/dn/bioconda/nextstrain.svg?style=flat
   :target: https://anaconda.org/bioconda/nextstrain
   :alt:   (downloads)
.. |docker_nextstrain| image:: https://quay.io/repository/biocontainers/nextstrain/status
   :target: https://quay.io/repository/biocontainers/nextstrain
.. _`nextstrain/tags`: https://quay.io/repository/biocontainers/nextstrain?tab=tags


.. raw:: html

    <script>
        var package = "nextstrain";
        var versions = ["20200304","20200304"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextstrain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextstrain/README.html