:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbio-gff'
.. highlight: bash

bcbio-gff
=========

.. conda:recipe:: bcbio-gff
   :replaces_section_title:
   :noindex:

   A Python library to read and write Generic Feature Format \(GFF\).

   :homepage: https://github.com/chapmanb/bcbb/tree/master/gff
   :documentation: https://biopython.org/wiki/GFF_Parsing
   
   :developer docs: https://github.com/chapmanb/bcbb
   :license: Biopython License Agreement
   :recipe: /`bcbio-gff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-gff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-gff/meta.yaml>`_

   


.. conda:package:: bcbio-gff

   |downloads_bcbio-gff| |docker_bcbio-gff|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.1-3</code>,  <code>0.7.1-2</code>,  <code>0.7.1-1</code>,  <code>0.7.1-0</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.9-1</code>,  <code>0.6.9-0</code>,  <code>0.6.8-0</code>,  </span></summary>
      

      ``0.7.1-3``,  ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.9-1``,  ``0.6.9-0``,  ``0.6.8-0``,  ``0.6.7-0``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.4-2``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.2-2``,  ``0.6.2-1``,  ``0.6.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on bx-python: 
   :depends on python: ``>=3``
   :depends on six: 

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

    pixi global install bcbio-gff

to add into an existing workspace instead, run::

    pixi add bcbio-gff

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bcbio-gff

Alternatively, to install into a new environment, run::

    conda create -n envname bcbio-gff

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bcbio-gff:<tag>

(see `bcbio-gff/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bcbio-gff| image:: https://img.shields.io/conda/dn/bioconda/bcbio-gff.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbio-gff
   :alt:   (downloads)
.. |docker_bcbio-gff| image:: https://quay.io/repository/biocontainers/bcbio-gff/status
   :target: https://quay.io/repository/biocontainers/bcbio-gff
.. _`bcbio-gff/tags`: https://quay.io/repository/biocontainers/bcbio-gff?tab=tags


.. raw:: html

    <script>
        var package = "bcbio-gff";
        var versions = ["0.7.1","0.7.1","0.7.1","0.7.1","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-gff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-gff/README.html