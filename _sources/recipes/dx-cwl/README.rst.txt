:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dx-cwl'
.. highlight: bash

dx-cwl
======

.. conda:recipe:: dx-cwl
   :replaces_section_title:
   :noindex:

   Import and run CWL workflows on DNAnexus

   :homepage: https://github.com/dnanexus/dx-cwl
   :license: Apache v2.0
   :recipe: /`dx-cwl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dx-cwl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dx-cwl/meta.yaml>`_

   


.. conda:package:: dx-cwl

   |downloads_dx-cwl| |docker_dx-cwl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.0a20180905-3</code>,  <code>0.1.0a20180905-2</code>,  <code>0.1.0a20180905-1</code>,  <code>0.1.0a20180905-0</code>,  <code>0.1.0a20180829-0</code>,  <code>0.1.0a20180820-0</code>,  <code>0.1.0a20180119-1</code>,  <code>0.1.0a20180119-0</code>,  <code>0.1.0a20180116-0</code>,  </span></summary>
      

      ``0.1.0a20180905-3``,  ``0.1.0a20180905-2``,  ``0.1.0a20180905-1``,  ``0.1.0a20180905-0``,  ``0.1.0a20180829-0``,  ``0.1.0a20180820-0``,  ``0.1.0a20180119-1``,  ``0.1.0a20180119-0``,  ``0.1.0a20180116-0``,  ``0.1.0a20171231-0``,  ``0.1.0a20171222-0``,  ``0.1.0a20171221-0``,  ``0.1.0a20171213-0``,  ``0.1.0a20171211-0``,  ``0.1.0a20171206-0``,  ``0.1.0a20171029-0``

      
      .. raw:: html

         </details>
      

   
   :depends cwltool: 
   :depends dxpy: 
   :depends futures: 
   :depends python: ``<3``
   :depends pyyaml: 
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

      mamba install dx-cwl

   and update with::

      mamba update dx-cwl

  To create a new environment, run::

      mamba create --name myenvname dx-cwl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dx-cwl:<tag>

   (see `dx-cwl/tags`_ for valid values for ``<tag>``)


.. |downloads_dx-cwl| image:: https://img.shields.io/conda/dn/bioconda/dx-cwl.svg?style=flat
   :target: https://anaconda.org/bioconda/dx-cwl
   :alt:   (downloads)
.. |docker_dx-cwl| image:: https://quay.io/repository/biocontainers/dx-cwl/status
   :target: https://quay.io/repository/biocontainers/dx-cwl
.. _`dx-cwl/tags`: https://quay.io/repository/biocontainers/dx-cwl?tab=tags


.. raw:: html

    <script>
        var package = "dx-cwl";
        var versions = ["0.1.0a20180905","0.1.0a20180905","0.1.0a20180905","0.1.0a20180905","0.1.0a20180829"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dx-cwl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dx-cwl/README.html