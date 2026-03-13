:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfaidx'
.. highlight: bash

pyfaidx
=======

.. conda:recipe:: pyfaidx
   :replaces_section_title:
   :noindex:

   pyfaidx\: efficient pythonic random access to fasta subsequences

   :homepage: https://github.com/mdshw5/pyfaidx
   :documentation: https://pypi.org/project/pyfaidx
   
   :license: BSD / BSD
   :recipe: /`pyfaidx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfaidx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfaidx/meta.yaml>`_
   :links: biotools: :biotools:`pyfaidx`, doi: :doi:`10.7287/peerj.preprints.970v1`

   


.. conda:package:: pyfaidx

   |downloads_pyfaidx| |docker_pyfaidx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.0.3-0</code>,  <code>0.9.0.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1.4-0</code>,  <code>0.8.1.3-0</code>,  <code>0.8.1.2-0</code>,  <code>0.8.1.1-0</code>,  <code>0.8.0-0</code>,  </span></summary>
      

      ``0.9.0.3-0``,  ``0.9.0.1-0``,  ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.1.4-0``,  ``0.8.1.3-0``,  ``0.8.1.2-0``,  ``0.8.1.1-0``,  ``0.8.0-0``,  ``0.7.2.2-0``,  ``0.7.2.1-1``,  ``0.7.2.1-0``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.4-0``,  ``0.6.3.1-1``,  ``0.6.3.1-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.9.5-0``,  ``0.5.9.4-0``,  ``0.5.9.2-0``,  ``0.5.9.1-1``,  ``0.5.9.1-0``,  ``0.5.9-1``,  ``0.5.9-0``,  ``0.5.8-1``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5.2-1``,  ``0.5.5.2-0``,  ``0.5.4.1-0``,  ``0.5.3-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.9.2-0``,  ``0.4.8.1-4``,  ``0.4.8.1-3``,  ``0.4.8.1-2``,  ``0.4.8.1-0``,  ``0.4.7.1-3``,  ``0.4.7.1-2``,  ``0.4.7.1-0``,  ``0.4.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on importlib-metadata: 
   :depends on packaging: 
   :depends on python: ``>=3.7``
   :depends on pyvcf3: 
   :depends on setuptools: 
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

    pixi global install pyfaidx

to add into an existing workspace instead, run::

    pixi add pyfaidx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyfaidx

Alternatively, to install into a new environment, run::

    conda create -n envname pyfaidx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyfaidx:<tag>

(see `pyfaidx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyfaidx| image:: https://img.shields.io/conda/dn/bioconda/pyfaidx.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfaidx
   :alt:   (downloads)
.. |docker_pyfaidx| image:: https://quay.io/repository/biocontainers/pyfaidx/status
   :target: https://quay.io/repository/biocontainers/pyfaidx
.. _`pyfaidx/tags`: https://quay.io/repository/biocontainers/pyfaidx?tab=tags


.. raw:: html

    <script>
        var package = "pyfaidx";
        var versions = ["0.9.0.3","0.9.0.1","0.9.0","0.8.2","0.8.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfaidx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfaidx/README.html