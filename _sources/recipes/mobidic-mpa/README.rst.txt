:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mobidic-mpa'
.. highlight: bash

mobidic-mpa
===========

.. conda:recipe:: mobidic-mpa
   :replaces_section_title:
   :noindex:

   MPA\: MoBiDiC Prioritization Algorithm

   :homepage: https://neuro-2.iurc.montp.inserm.fr/mpaweb/
   :developer docs: https://github.com/mobidic/MPA
   :license: MIT / MIT
   :recipe: /`mobidic-mpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mobidic-mpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mobidic-mpa/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.jmoldx.2018.03.009`

   


.. conda:package:: mobidic-mpa

   |downloads_mobidic-mpa| |docker_mobidic-mpa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0-0</code>,  <code>1.2.6-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.3-0</code>,  </span></summary>
      

      ``1.3.0-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: 
   :depends on tqdm: ``>=4.59.0``
   :depends on vcfpy: ``>=0.13.4``

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

    pixi global install mobidic-mpa

to add into an existing workspace instead, run::

    pixi add mobidic-mpa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mobidic-mpa

Alternatively, to install into a new environment, run::

    conda create -n envname mobidic-mpa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mobidic-mpa:<tag>

(see `mobidic-mpa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mobidic-mpa| image:: https://img.shields.io/conda/dn/bioconda/mobidic-mpa.svg?style=flat
   :target: https://anaconda.org/bioconda/mobidic-mpa
   :alt:   (downloads)
.. |docker_mobidic-mpa| image:: https://quay.io/repository/biocontainers/mobidic-mpa/status
   :target: https://quay.io/repository/biocontainers/mobidic-mpa
.. _`mobidic-mpa/tags`: https://quay.io/repository/biocontainers/mobidic-mpa?tab=tags


.. raw:: html

    <script>
        var package = "mobidic-mpa";
        var versions = ["1.3.0","1.2.6","1.2.5","1.2.4","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mobidic-mpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mobidic-mpa/README.html