:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'opentargets-validator'
.. highlight: bash

opentargets-validator
=====================

.. conda:recipe:: opentargets-validator
   :replaces_section_title:
   :noindex:

   Evidence validation at targetvalidation.org

   :homepage: https://github.com/opentargets/validator
   :license: APACHE / Apache, Version 2.0
   :recipe: /`opentargets-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opentargets-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opentargets-validator/meta.yaml>`_

   


.. conda:package:: opentargets-validator

   |downloads_opentargets-validator| |docker_opentargets-validator|

   :versions:
      
      

      ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-0``

      

   
   :depends future: 
   :depends jsonschema: ``3.0.0a3.*``
   :depends opentargets-urlzsource: 
   :depends pypeln: ``0.1.6.*``
   :depends python: ``3.7.*``
   :depends requests: 
   :depends rfc3987: 
   :depends simplejson: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install opentargets-validator

   and update with::

      mamba update opentargets-validator

  To create a new environment, run::

      mamba create --name myenvname opentargets-validator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/opentargets-validator:<tag>

   (see `opentargets-validator/tags`_ for valid values for ``<tag>``)


.. |downloads_opentargets-validator| image:: https://img.shields.io/conda/dn/bioconda/opentargets-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/opentargets-validator
   :alt:   (downloads)
.. |docker_opentargets-validator| image:: https://quay.io/repository/biocontainers/opentargets-validator/status
   :target: https://quay.io/repository/biocontainers/opentargets-validator
.. _`opentargets-validator/tags`: https://quay.io/repository/biocontainers/opentargets-validator?tab=tags


.. raw:: html

    <script>
        var package = "opentargets-validator";
        var versions = ["0.8.0","0.7.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/opentargets-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/opentargets-validator/README.html