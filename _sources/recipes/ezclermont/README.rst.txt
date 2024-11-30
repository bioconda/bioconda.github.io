:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ezclermont'
.. highlight: bash

ezclermont
==========

.. conda:recipe:: ezclermont
   :replaces_section_title:
   :noindex:

   easily determine the Clermont 2013 E coli phylotype

   :homepage: https://github.com/nickp60/ezclermont
   :developer docs: https://github.com/nickp60/barrnap-python
   :license: MIT / MIT License
   :recipe: /`ezclermont <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezclermont>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezclermont/meta.yaml>`_

   Determines the Clermont 2013 phylotype of a given E coli strain by performing in silico quadriplex PCR


.. conda:package:: ezclermont

   |downloads_ezclermont| |docker_ezclermont|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.0-0``,  ``0.4.3-0``

      

   
   :depends biopython: 
   :depends coverage: 
   :depends python: ``>=3.5``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ezclermont

   and update with::

      mamba update ezclermont

  To create a new environment, run::

      mamba create --name myenvname ezclermont

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ezclermont:<tag>

   (see `ezclermont/tags`_ for valid values for ``<tag>``)


.. |downloads_ezclermont| image:: https://img.shields.io/conda/dn/bioconda/ezclermont.svg?style=flat
   :target: https://anaconda.org/bioconda/ezclermont
   :alt:   (downloads)
.. |docker_ezclermont| image:: https://quay.io/repository/biocontainers/ezclermont/status
   :target: https://quay.io/repository/biocontainers/ezclermont
.. _`ezclermont/tags`: https://quay.io/repository/biocontainers/ezclermont?tab=tags


.. raw:: html

    <script>
        var package = "ezclermont";
        var versions = ["0.7.0","0.6.3","0.6.2","0.6.1","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ezclermont/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ezclermont/README.html