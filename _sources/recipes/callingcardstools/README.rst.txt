:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'callingcardstools'
.. highlight: bash

callingcardstools
=================

.. conda:recipe:: callingcardstools
   :replaces_section_title:
   :noindex:

   An API and collection of cmd line tools to work with calling cards sequencing data

   :homepage: https://github.com/cmatKhan/callingCardsTools
   :documentation: https://cmatkhan.github.io/callingCardsTools/
   
   :developer docs: https://github.com/cmatKhan/callingCardsTools/tree/dev
   :license: MIT / MIT
   :recipe: /`callingcardstools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/callingcardstools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/callingcardstools/meta.yaml>`_

   


.. conda:package:: callingcardstools

   |downloads_callingcardstools| |docker_callingcardstools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.6-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.1-1</code>,  </span></summary>
      

      ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.6-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyranges: ``>=0.0.129``
   :depends on pysam: 
   :depends on python: ``>=3.8``
   :depends on python-edlib: ``>=1.3.9``
   :depends on scipy: ``>=1.11.4``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install callingcardstools

to add into an existing workspace instead, run::

    pixi add callingcardstools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install callingcardstools

Alternatively, to install into a new environment, run::

    conda create -n envname callingcardstools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/callingcardstools:<tag>

(see `callingcardstools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_callingcardstools| image:: https://img.shields.io/conda/dn/bioconda/callingcardstools.svg?style=flat
   :target: https://anaconda.org/bioconda/callingcardstools
   :alt:   (downloads)
.. |docker_callingcardstools| image:: https://quay.io/repository/biocontainers/callingcardstools/status
   :target: https://quay.io/repository/biocontainers/callingcardstools
.. _`callingcardstools/tags`: https://quay.io/repository/biocontainers/callingcardstools?tab=tags


.. raw:: html

    <script>
        var package = "callingcardstools";
        var versions = ["1.8.1","1.8.0","1.7.2","1.7.1","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/callingcardstools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/callingcardstools/README.html