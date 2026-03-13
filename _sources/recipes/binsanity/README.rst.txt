:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binsanity'
.. highlight: bash

binsanity
=========

.. conda:recipe:: binsanity
   :replaces_section_title:
   :noindex:

   Method to cluster contigs based a biphasic method with coverage and composition

   :homepage: https://github.com/edgraham/BinSanity
   :license: GPL3 / GPL3
   :recipe: /`binsanity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binsanity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binsanity/meta.yaml>`_

   


.. conda:package:: binsanity

   |downloads_binsanity| |docker_binsanity|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.4.4-1</code>,  <code>0.4.4-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.3.8-0</code>,  <code>0.3.6-0</code>,  <code>0.3.4-0</code>,  </span></summary>
      

      ``0.5.4-0``,  ``0.5.3-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.8-0``,  ``0.3.6-0``,  ``0.3.4-0``,  ``0.3.1-0``,  ``0.2.9.5-0``,  ``0.2.9.4-0``,  ``0.2.9.2-0``,  ``0.2.9.1-0``,  ``0.2.9-0``,  ``0.2.8.2-0``,  ``0.2.7.1-0``,  ``0.2.6.3-0``,  ``0.2.6.1-2``,  ``0.2.6.1-1``,  ``0.2.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on checkm-genome: 
   :depends on pandas: ``>=0.13.0``
   :depends on python: 
   :depends on scikit-learn: ``>=0.23``
   :depends on scipy: ``>=0.13.0``
   :depends on subread: 

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

    pixi global install binsanity

to add into an existing workspace instead, run::

    pixi add binsanity

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install binsanity

Alternatively, to install into a new environment, run::

    conda create -n envname binsanity

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/binsanity:<tag>

(see `binsanity/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_binsanity| image:: https://img.shields.io/conda/dn/bioconda/binsanity.svg?style=flat
   :target: https://anaconda.org/bioconda/binsanity
   :alt:   (downloads)
.. |docker_binsanity| image:: https://quay.io/repository/biocontainers/binsanity/status
   :target: https://quay.io/repository/biocontainers/binsanity
.. _`binsanity/tags`: https://quay.io/repository/biocontainers/binsanity?tab=tags


.. raw:: html

    <script>
        var package = "binsanity";
        var versions = ["0.5.4","0.5.3","0.4.4","0.4.4","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binsanity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binsanity/README.html