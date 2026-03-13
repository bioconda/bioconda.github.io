:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopython.convert'
.. highlight: bash

biopython.convert
=================

.. conda:recipe:: biopython.convert
   :replaces_section_title:
   :noindex:

   Interconvert various file formats supported by BioPython

   :homepage: https://github.com/brinkmanlab/BioPython-Convert
   :license: MIT / MIT
   :recipe: /`biopython.convert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopython.convert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopython.convert/meta.yaml>`_

   


.. conda:package:: biopython.convert

   |downloads_biopython.convert| |docker_biopython.convert|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  </span></summary>
      

      ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.73``
   :depends on gffutils: ``>=0.9``
   :depends on jmespath: ``>=0.9.4``
   :depends on pbr: 
   :depends on python: 

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

    pixi global install biopython.convert

to add into an existing workspace instead, run::

    pixi add biopython.convert

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biopython.convert

Alternatively, to install into a new environment, run::

    conda create -n envname biopython.convert

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biopython.convert:<tag>

(see `biopython.convert/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biopython.convert| image:: https://img.shields.io/conda/dn/bioconda/biopython.convert.svg?style=flat
   :target: https://anaconda.org/bioconda/biopython.convert
   :alt:   (downloads)
.. |docker_biopython.convert| image:: https://quay.io/repository/biocontainers/biopython.convert/status
   :target: https://quay.io/repository/biocontainers/biopython.convert
.. _`biopython.convert/tags`: https://quay.io/repository/biocontainers/biopython.convert?tab=tags


.. raw:: html

    <script>
        var package = "biopython.convert";
        var versions = ["1.3.3","1.3.2","1.3.1","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopython.convert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopython.convert/README.html