:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vase'
.. highlight: bash

vase
====

.. conda:recipe:: vase/0.5.1
   :replaces_section_title:
   :noindex:

   Variant Annotation\, Segregation and Exclusion for family or cohort based rare\-disease sequencing studies

   :homepage: https://github.com/david-a-parry/vase
   :license: MIT / MIT
   :recipe: /`vase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vase>`_/`0.5.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vase/0.5.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vase/0.5.1/meta.yaml>`_

   


.. conda:package:: vase

   |downloads_vase| |docker_vase|

   :versions:
      
      

      ``0.5.1-0``,  ``0.2.4-0``

      

   
   :depends biopython: 
   :depends mygene: 
   :depends natsort: 
   :depends numpy: 
   :depends pysam: ``>=0.17``
   :depends python: 
   :depends requests: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vase

   and update with::

      conda update vase

   or use the docker container::

      docker pull quay.io/biocontainers/vase:<tag>

   (see `vase/tags`_ for valid values for ``<tag>``)


.. |downloads_vase| image:: https://img.shields.io/conda/dn/bioconda/vase.svg?style=flat
   :target: https://anaconda.org/bioconda/vase
   :alt:   (downloads)
.. |docker_vase| image:: https://quay.io/repository/biocontainers/vase/status
   :target: https://quay.io/repository/biocontainers/vase
.. _`vase/tags`: https://quay.io/repository/biocontainers/vase?tab=tags


.. raw:: html

    <script>
        var package = "vase";
        var versions = ["0.5.1","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vase/README.html