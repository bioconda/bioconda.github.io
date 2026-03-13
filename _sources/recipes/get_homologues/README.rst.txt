:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'get_homologues'
.. highlight: bash

get_homologues
==============

.. conda:recipe:: get_homologues
   :replaces_section_title:
   :noindex:

   A versatile software package for pan\-genome analysis\, including GET\_HOMOLOGUES and GET\_HOMOLOGUES\-EST

   :homepage: https://github.com/eead-csic-compbio/get_homologues
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`get_homologues <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_homologues>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_homologues/meta.yaml>`_
   :links: biotools: :biotools:`get_homologues`, doi: :doi:`https://doi.org/10.1128/AEM.02411-13`, doi: :doi:`https://doi.org/10.3389/fpls.2017.00184`, doi: :doi:`https://doi.org/10.1007/978-1-4939-1720-4_14`, doi: :doi:`https://doi.org/10.1007/978-1-0716-2429-6_9`

   


.. conda:package:: get_homologues

   |downloads_get_homologues| |docker_get_homologues|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.8.1-0</code>,  <code>3.8-0</code>,  <code>3.7.5-0</code>,  <code>3.7.4-0</code>,  <code>3.7.3-0</code>,  <code>3.7.2-0</code>,  <code>3.7.1-0</code>,  <code>3.6.3-0</code>,  <code>3.6.2-0</code>,  </span></summary>
      

      ``3.8.1-0``,  ``3.8-0``,  ``3.7.5-0``,  ``3.7.4-0``,  ``3.7.3-0``,  ``3.7.2-0``,  ``3.7.1-0``,  ``3.6.3-0``,  ``3.6.2-0``,  ``3.6.1-0``,  ``3.5.5-0``,  ``3.5.4-0``,  ``3.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: 
   :depends on cogtriangles: 
   :depends on diamond: 
   :depends on hmmer: 
   :depends on mcl: 
   :depends on perl: 
   :depends on perl-gd: 
   :depends on phylip: 
   :depends on r-ape: 
   :depends on r-base: 
   :depends on r-dendextend: 
   :depends on r-factoextra: 
   :depends on r-gplots: 
   :depends on wget: 

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

    pixi global install get_homologues

to add into an existing workspace instead, run::

    pixi add get_homologues

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install get_homologues

Alternatively, to install into a new environment, run::

    conda create -n envname get_homologues

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/get_homologues:<tag>

(see `get_homologues/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_get_homologues| image:: https://img.shields.io/conda/dn/bioconda/get_homologues.svg?style=flat
   :target: https://anaconda.org/bioconda/get_homologues
   :alt:   (downloads)
.. |docker_get_homologues| image:: https://quay.io/repository/biocontainers/get_homologues/status
   :target: https://quay.io/repository/biocontainers/get_homologues
.. _`get_homologues/tags`: https://quay.io/repository/biocontainers/get_homologues?tab=tags


.. raw:: html

    <script>
        var package = "get_homologues";
        var versions = ["3.8.1","3.8","3.7.5","3.7.4","3.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/get_homologues/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/get_homologues/README.html