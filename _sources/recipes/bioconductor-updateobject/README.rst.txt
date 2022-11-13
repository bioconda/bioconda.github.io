:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-updateobject'
.. highlight: bash

bioconductor-updateobject
=========================

.. conda:recipe:: bioconductor-updateobject
   :replaces_section_title:
   :noindex:

   Find\/fix old serialized S4 instances

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/updateObject.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-updateobject <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-updateobject>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-updateobject/meta.yaml>`_

   A set of tools built around updateObject\(\) to work with old serialized S4 instances. The package is primarily useful to package maintainers who want to update the serialized S4 instances included in their package. This is still work\-in\-progress.


.. conda:package:: bioconductor-updateobject

   |downloads_bioconductor-updateobject| |docker_bioconductor-updateobject|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-digest: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-updateobject

   and update with::

      conda update bioconductor-updateobject

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-updateobject:<tag>

   (see `bioconductor-updateobject/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-updateobject| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-updateobject.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-updateobject
   :alt:   (downloads)
.. |docker_bioconductor-updateobject| image:: https://quay.io/repository/biocontainers/bioconductor-updateobject/status
   :target: https://quay.io/repository/biocontainers/bioconductor-updateobject
.. _`bioconductor-updateobject/tags`: https://quay.io/repository/biocontainers/bioconductor-updateobject?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-updateobject";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-updateobject/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-updateobject/README.html