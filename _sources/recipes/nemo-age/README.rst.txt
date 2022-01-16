:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nemo-age'
.. highlight: bash

nemo-age
========

.. conda:recipe:: nemo-age
   :replaces_section_title:
   :noindex:

   In Nemo\-age\, it is possible to model genetic and phenotypic evolution in populations with\, for instance\, overlapping generations\, a seed bank\, and multiple age classes with stage\-specific transition rates\, fecundities\, selection pressures\, and dispersal rates\, among other things.

   :homepage: https://bitbucket.org/ecoevo/nemo-age-release
   :license: GPL3 / GPL-3
   :recipe: /`nemo-age <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nemo-age>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nemo-age/meta.yaml>`_

   


.. conda:package:: nemo-age

   |downloads_nemo-age| |docker_nemo-age|

   :versions:
      
      

      ``0.30.0-1``,  ``0.30.0-0``,  ``0.29.0-1``,  ``0.29.0-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcxx: ``>=11.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nemo-age

   and update with::

      conda update nemo-age

   or use the docker container::

      docker pull quay.io/biocontainers/nemo-age:<tag>

   (see `nemo-age/tags`_ for valid values for ``<tag>``)


.. |downloads_nemo-age| image:: https://img.shields.io/conda/dn/bioconda/nemo-age.svg?style=flat
   :target: https://anaconda.org/bioconda/nemo-age
   :alt:   (downloads)
.. |docker_nemo-age| image:: https://quay.io/repository/biocontainers/nemo-age/status
   :target: https://quay.io/repository/biocontainers/nemo-age
.. _`nemo-age/tags`: https://quay.io/repository/biocontainers/nemo-age?tab=tags


.. raw:: html

    <script>
        var package = "nemo-age";
        var versions = ["0.30.0","0.30.0","0.29.0","0.29.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nemo-age/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nemo-age/README.html