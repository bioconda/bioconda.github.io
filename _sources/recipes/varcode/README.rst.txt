:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varcode'
.. highlight: bash

varcode
=======

.. conda:recipe:: varcode
   :replaces_section_title:
   :noindex:

   Variant annotation in Python

   :homepage: https://github.com/openvax/varcode
   :license: APACHE / Apache Software
   :recipe: /`varcode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varcode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varcode/meta.yaml>`_

   


.. conda:package:: varcode

   |downloads_varcode| |docker_varcode|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends biopython: ``>=1.64``
   :depends memoized-property: ``>=1.0.2``
   :depends numpy: ``>=1.7``
   :depends pandas: ``>=0.15``
   :depends pyensembl: ``>=1.8.1``
   :depends python: 
   :depends pyvcf3: ``>=1.0.0``
   :depends sercol: ``>=0.1.4``
   :depends serializable: ``>=0.2.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install varcode

   and update with::

      conda update varcode

   or use the docker container::

      docker pull quay.io/biocontainers/varcode:<tag>

   (see `varcode/tags`_ for valid values for ``<tag>``)


.. |downloads_varcode| image:: https://img.shields.io/conda/dn/bioconda/varcode.svg?style=flat
   :target: https://anaconda.org/bioconda/varcode
   :alt:   (downloads)
.. |docker_varcode| image:: https://quay.io/repository/biocontainers/varcode/status
   :target: https://quay.io/repository/biocontainers/varcode
.. _`varcode/tags`: https://quay.io/repository/biocontainers/varcode?tab=tags


.. raw:: html

    <script>
        var package = "varcode";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varcode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varcode/README.html