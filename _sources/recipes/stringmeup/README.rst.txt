:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stringmeup'
.. highlight: bash

stringmeup
==========

.. conda:recipe:: stringmeup
   :replaces_section_title:
   :noindex:

   A post\-processing tool to reclassify Kraken 2 output based on the confidence score and\/or minimum minimizer hit groups.

   :homepage: https://github.com/danisven/StringMeUp
   :license: MIT / MIT
   :recipe: /`stringmeup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringmeup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringmeup/meta.yaml>`_

   


.. conda:package:: stringmeup

   |downloads_stringmeup| |docker_stringmeup|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends dataclasses: 
   :depends python: ``>3``
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

      mamba install stringmeup

   and update with::

      mamba update stringmeup

  To create a new environment, run::

      mamba create --name myenvname stringmeup

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stringmeup:<tag>

   (see `stringmeup/tags`_ for valid values for ``<tag>``)


.. |downloads_stringmeup| image:: https://img.shields.io/conda/dn/bioconda/stringmeup.svg?style=flat
   :target: https://anaconda.org/bioconda/stringmeup
   :alt:   (downloads)
.. |docker_stringmeup| image:: https://quay.io/repository/biocontainers/stringmeup/status
   :target: https://quay.io/repository/biocontainers/stringmeup
.. _`stringmeup/tags`: https://quay.io/repository/biocontainers/stringmeup?tab=tags


.. raw:: html

    <script>
        var package = "stringmeup";
        var versions = ["0.1.5","0.1.4","0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stringmeup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stringmeup/README.html