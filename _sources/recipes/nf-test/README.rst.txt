:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nf-test'
.. highlight: bash

nf-test
=======

.. conda:recipe:: nf-test
   :replaces_section_title:
   :noindex:

   nf\-test is a simple test framework for Nextflow pipelines.

   :homepage: https://code.askimed.com/nf-test/
   :license: MIT
   :recipe: /`nf-test <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-test>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-test/meta.yaml>`_

   


.. conda:package:: nf-test

   |downloads_nf-test| |docker_nf-test|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.4-0</code>,  <code>0.9.3-1</code>,  <code>0.9.3-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  </span></summary>
      

      ``0.9.4-0``,  ``0.9.3-1``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.3-2``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on coreutils: 
   :depends on curl: 
   :depends on openjdk: ``>=17,<26``

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

    pixi global install nf-test

to add into an existing workspace instead, run::

    pixi add nf-test

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nf-test

Alternatively, to install into a new environment, run::

    conda create -n envname nf-test

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nf-test:<tag>

(see `nf-test/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nf-test| image:: https://img.shields.io/conda/dn/bioconda/nf-test.svg?style=flat
   :target: https://anaconda.org/bioconda/nf-test
   :alt:   (downloads)
.. |docker_nf-test| image:: https://quay.io/repository/biocontainers/nf-test/status
   :target: https://quay.io/repository/biocontainers/nf-test
.. _`nf-test/tags`: https://quay.io/repository/biocontainers/nf-test?tab=tags


.. raw:: html

    <script>
        var package = "nf-test";
        var versions = ["0.9.4","0.9.3","0.9.3","0.9.2","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nf-test/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nf-test/README.html