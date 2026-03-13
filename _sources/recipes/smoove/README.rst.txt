:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smoove'
.. highlight: bash

smoove
======

.. conda:recipe:: smoove
   :replaces_section_title:
   :noindex:

   structural variant calling and genotyping with existing tools\, but\, smoothly

   :homepage: https://github.com/brentp/smoove
   :license: Apache / Apache-2.0
   :recipe: /`smoove <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smoove>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smoove/meta.yaml>`_

   


.. conda:package:: smoove

   |downloads_smoove| |docker_smoove|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.8-1</code>,  <code>0.2.8-0</code>,  <code>0.2.7-0</code>,  <code>0.2.6-1</code>,  <code>0.2.6-0</code>,  <code>0.2.5-0</code>,  <code>0.2.4-0</code>,  <code>0.2.3-1</code>,  <code>0.2.3-0</code>,  </span></summary>
      

      ``0.2.8-1``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.1.9-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: 
   :depends on duphold: 
   :depends on gsort: 
   :depends on htslib: 
   :depends on lumpy-sv: ``>=0.3``
   :depends on mosdepth: 
   :depends on samtools: 
   :depends on svtools: 
   :depends on svtyper: 

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

    pixi global install smoove

to add into an existing workspace instead, run::

    pixi add smoove

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install smoove

Alternatively, to install into a new environment, run::

    conda create -n envname smoove

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/smoove:<tag>

(see `smoove/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_smoove| image:: https://img.shields.io/conda/dn/bioconda/smoove.svg?style=flat
   :target: https://anaconda.org/bioconda/smoove
   :alt:   (downloads)
.. |docker_smoove| image:: https://quay.io/repository/biocontainers/smoove/status
   :target: https://quay.io/repository/biocontainers/smoove
.. _`smoove/tags`: https://quay.io/repository/biocontainers/smoove?tab=tags


.. raw:: html

    <script>
        var package = "smoove";
        var versions = ["0.2.8","0.2.8","0.2.7","0.2.6","0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smoove/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smoove/README.html