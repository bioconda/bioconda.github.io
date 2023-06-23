:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'acdc'
.. highlight: bash

acdc
====

.. conda:recipe:: acdc
   :replaces_section_title:
   :noindex:

   \(a\)utomated \(c\)ontamination \(d\)etection and \(c\)onfidence estimation for single\-cell genome data

   :homepage: https://github.com/mlux86/acdc
   :documentation: https://github.com/mlux86/acdc#readme
   
   :license: MIT / MIT
   :recipe: /`acdc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/acdc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/acdc/meta.yaml>`_

   


.. conda:package:: acdc

   |downloads_acdc| |docker_acdc|

   :versions:
      
      

      ``1.02-0``

      

   
   :depends boost-cpp: ``>=1.82.0,<1.82.1.0a0``
   :depends kraken: ``>=0.10.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install acdc

   and update with::

      conda update acdc

   or use the docker container::

      docker pull quay.io/biocontainers/acdc:<tag>

   (see `acdc/tags`_ for valid values for ``<tag>``)


.. |downloads_acdc| image:: https://img.shields.io/conda/dn/bioconda/acdc.svg?style=flat
   :target: https://anaconda.org/bioconda/acdc
   :alt:   (downloads)
.. |docker_acdc| image:: https://quay.io/repository/biocontainers/acdc/status
   :target: https://quay.io/repository/biocontainers/acdc
.. _`acdc/tags`: https://quay.io/repository/biocontainers/acdc?tab=tags


.. raw:: html

    <script>
        var package = "acdc";
        var versions = ["1.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/acdc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/acdc/README.html