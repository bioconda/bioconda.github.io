:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'physiofit4galaxy'
.. highlight: bash

physiofit4galaxy
================

.. conda:recipe:: physiofit4galaxy
   :replaces_section_title:
   :noindex:

   Calculate extracellular fluxes from metabolite concentrations and biomass data

   :homepage: https://github.com/MetaSys-LISBP/PhysioFit4Galaxy
   :license: GPL-3.0
   :recipe: /`physiofit4galaxy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/physiofit4galaxy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/physiofit4galaxy/meta.yaml>`_

   


.. conda:package:: physiofit4galaxy

   |downloads_physiofit4galaxy| |docker_physiofit4galaxy|

   :versions:
      
      

      ``2.2.1-0``,  ``2.1.0-0``,  ``2.0.4-0``

      

   
   :depends matplotlib-base: ``>=3.5.2``
   :depends numpy: ``>=1.21.6``
   :depends openpyxl: ``>=3.0.9``
   :depends pandas: ``>=1.3.5``
   :depends python: ``>=3.7``
   :depends scipy: ``>=1.7.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install physiofit4galaxy

   and update with::

      conda update physiofit4galaxy

   or use the docker container::

      docker pull quay.io/biocontainers/physiofit4galaxy:<tag>

   (see `physiofit4galaxy/tags`_ for valid values for ``<tag>``)


.. |downloads_physiofit4galaxy| image:: https://img.shields.io/conda/dn/bioconda/physiofit4galaxy.svg?style=flat
   :target: https://anaconda.org/bioconda/physiofit4galaxy
   :alt:   (downloads)
.. |docker_physiofit4galaxy| image:: https://quay.io/repository/biocontainers/physiofit4galaxy/status
   :target: https://quay.io/repository/biocontainers/physiofit4galaxy
.. _`physiofit4galaxy/tags`: https://quay.io/repository/biocontainers/physiofit4galaxy?tab=tags


.. raw:: html

    <script>
        var package = "physiofit4galaxy";
        var versions = ["2.2.1","2.1.0","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/physiofit4galaxy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/physiofit4galaxy/README.html