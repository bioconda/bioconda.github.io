:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mentalist'
.. highlight: bash

mentalist
=========

.. conda:recipe:: mentalist
   :replaces_section_title:
   :noindex:

   The MLST pipeline developed by the PathOGiST research group.

   :homepage: https://github.com/WGS-TB/MentaLiST
   :license: MIT
   :recipe: /`mentalist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mentalist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mentalist/meta.yaml>`_

   


.. conda:package:: mentalist

   |downloads_mentalist| |docker_mentalist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.4-8</code>,  <code>0.2.4-7</code>,  <code>0.2.4-6</code>,  <code>0.2.4-5</code>,  <code>0.2.4-4</code>,  <code>0.2.4-3</code>,  <code>0.2.4-2</code>,  <code>0.2.4-1</code>,  <code>0.2.3-1</code>,  </span></summary>
      

      ``0.2.4-8``,  ``0.2.4-7``,  ``0.2.4-6``,  ``0.2.4-5``,  ``0.2.4-4``,  ``0.2.4-3``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.9-7``,  ``0.1.9-6``,  ``0.1.9-5``,  ``0.1.9-4``,  ``0.1.9-3``,  ``0.1.9-2``,  ``0.1.9-1``,  ``0.1.8-2``,  ``0.1.8-0``,  ``0.1.7-2``,  ``0.1.7-0``,  ``0.1.6-2``,  ``0.1.6-0``,  ``0.1.5-3``,  ``0.1.5-1``,  ``0.1.5-0``,  ``0.1.4-2``,  ``0.1.4-0``,  ``0.1.3-3``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on hdf5: ``1.10.1.*``
   :depends on julia: ``0.5.2.*``
   :depends on libgcc: ``>=13``
   :depends on libxml2: 
   :depends on mpfr: ``3.1.5.*``
   :depends on unzip: 

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

    pixi global install mentalist

to add into an existing workspace instead, run::

    pixi add mentalist

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mentalist

Alternatively, to install into a new environment, run::

    conda create -n envname mentalist

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mentalist:<tag>

(see `mentalist/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mentalist| image:: https://img.shields.io/conda/dn/bioconda/mentalist.svg?style=flat
   :target: https://anaconda.org/bioconda/mentalist
   :alt:   (downloads)
.. |docker_mentalist| image:: https://quay.io/repository/biocontainers/mentalist/status
   :target: https://quay.io/repository/biocontainers/mentalist
.. _`mentalist/tags`: https://quay.io/repository/biocontainers/mentalist?tab=tags


.. raw:: html

    <script>
        var package = "mentalist";
        var versions = ["0.2.4","0.2.4","0.2.4","0.2.4","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mentalist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mentalist/README.html