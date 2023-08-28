:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'opentargets'
.. highlight: bash

opentargets
===========

.. conda:recipe:: opentargets
   :replaces_section_title:
   :noindex:

   Client for Open Targets REST API at targetvalidation.org

   :homepage: https://github.com/opentargets/opentargets-py
   :license: APACHE / Apache License, Version 2.0
   :recipe: /`opentargets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opentargets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opentargets/meta.yaml>`_

   


.. conda:package:: opentargets

   |downloads_opentargets| |docker_opentargets|

   :versions:
      
      

      ``3.1.16-1``,  ``3.1.16-0``

      

   
   :depends addict: 
   :depends cachecontrol: 
   :depends future: 
   :depends h2: 
   :depends hyper: 
   :depends python: 
   :depends pyyaml: 
   :depends requests: 
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

      mamba install opentargets

   and update with::

      mamba update opentargets

  To create a new environment, run::

      mamba create --name myenvname opentargets

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/opentargets:<tag>

   (see `opentargets/tags`_ for valid values for ``<tag>``)


.. |downloads_opentargets| image:: https://img.shields.io/conda/dn/bioconda/opentargets.svg?style=flat
   :target: https://anaconda.org/bioconda/opentargets
   :alt:   (downloads)
.. |docker_opentargets| image:: https://quay.io/repository/biocontainers/opentargets/status
   :target: https://quay.io/repository/biocontainers/opentargets
.. _`opentargets/tags`: https://quay.io/repository/biocontainers/opentargets?tab=tags


.. raw:: html

    <script>
        var package = "opentargets";
        var versions = ["3.1.16","3.1.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/opentargets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/opentargets/README.html