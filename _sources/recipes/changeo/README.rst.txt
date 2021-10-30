:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'changeo'
.. highlight: bash

changeo
=======

.. conda:recipe:: changeo
   :replaces_section_title:
   :noindex:

   A bioinformatics toolkit for processing high\-throughput lymphocyte receptor sequencing data. Citations\: Gupta\, et al \(2015\) \<doi\:10.1093\/bioinformatics\/btv359\>.

   :homepage: http://changeo.readthedocs.io
   :license: CC / Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
   :recipe: /`changeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/changeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/changeo/meta.yaml>`_

   


.. conda:package:: changeo

   |downloads_changeo| |docker_changeo|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``

      

   
   :depends airr: ``>=1.2.1``
   :depends biopython: ``>=1.65,<1.78``
   :depends numpy: ``>=1.8``
   :depends pandas: ``>=0.15``
   :depends presto: ``>=0.5.10``
   :depends python: ``>=3.4``
   :depends pyyaml: ``>=3.12``
   :depends scipy: ``>=0.14``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install changeo

   and update with::

      conda update changeo

   or use the docker container::

      docker pull quay.io/biocontainers/changeo:<tag>

   (see `changeo/tags`_ for valid values for ``<tag>``)


.. |downloads_changeo| image:: https://img.shields.io/conda/dn/bioconda/changeo.svg?style=flat
   :target: https://anaconda.org/bioconda/changeo
   :alt:   (downloads)
.. |docker_changeo| image:: https://quay.io/repository/biocontainers/changeo/status
   :target: https://quay.io/repository/biocontainers/changeo
.. _`changeo/tags`: https://quay.io/repository/biocontainers/changeo?tab=tags


.. raw:: html

    <script>
        var package = "changeo";
        var versions = ["1.2.0","1.1.0","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/changeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/changeo/README.html