:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crisprme'
.. highlight: bash

crisprme
========

.. conda:recipe:: crisprme
   :replaces_section_title:
   :noindex:

   CRISPRme\, tool package for CRISPR experiments assessment and analysis.

   :homepage: https://github.com/pinellolab/CRISPRme
   :documentation: https://github.com/pinellolab/CRISPRme/blob/v2.1.9/README.md
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`crisprme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprme/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41588-022-01257-y`

   


.. conda:package:: crisprme

   |downloads_crisprme| |docker_crisprme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.9-0</code>,  <code>2.1.8-1</code>,  <code>2.1.8-0</code>,  <code>2.1.7-1</code>,  <code>2.1.7-0</code>,  <code>2.1.6-0</code>,  <code>2.1.5-0</code>,  <code>2.1.4-0</code>,  <code>2.1.3-0</code>,  </span></summary>
      

      ``2.1.9-0``,  ``2.1.8-1``,  ``2.1.8-0``,  ``2.1.7-1``,  ``2.1.7-0``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.9.9-1``,  ``1.9.9-0``,  ``1.9.8-0``,  ``1.9.7-0``,  ``1.9.6-0``,  ``1.9.5-0``,  ``1.9.4-2``,  ``1.9.4-1``,  ``1.9.4-0``,  ``1.9.3-1``,  ``1.9.3-0``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.8-0``,  ``1.8.7-0``,  ``1.8.6-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.9-1``,  ``1.7.9-0``,  ``1.7.7-0``,  ``1.7.2-0``,  ``1.7.0-0``,  ``1.6.8-0``,  ``1.6.7-0``,  ``1.6.6-0``,  ``1.6.5-1``,  ``1.6.5-0``,  ``1.6.4-1``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.8-0``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.9-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on axel: 
   :depends on crispritz: ``2.7.0.*``
   :depends on dash: ``1.10.0.*``
   :depends on dash-bootstrap-components: ``0.10.0.*``
   :depends on dash-core-components: ``1.9.0.*``
   :depends on dash-daq: ``0.4.0.*``
   :depends on dash-html-components: ``1.0.3.*``
   :depends on dash-renderer: ``1.3.0.*``
   :depends on dash-table: ``4.6.2.*``
   :depends on flask: ``1.1.3.*``
   :depends on flask-caching: ``1.7.1.*``
   :depends on flask-compress: ``1.5.0.*``
   :depends on fontconfig: ``2.13.1.*``
   :depends on freetype: ``2.10.1.*``
   :depends on future: ``0.18.2.*``
   :depends on gdown: 
   :depends on gettext: ``0.19.8.1.*``
   :depends on gunicorn: ``20.0.4.*``
   :depends on itsdangerous: ``>=0.24,<2.0``
   :depends on numpy: ``1.20.0.*``
   :depends on pandas: ``1.2.5.*``
   :depends on pysam: ``0.22.1.*``
   :depends on python: ``>=3.8,<3.9.0a0``
   :depends on werkzeug: ``1.0.1.*``
   :depends on zip: 

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

    pixi global install crisprme

to add into an existing workspace instead, run::

    pixi add crisprme

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install crisprme

Alternatively, to install into a new environment, run::

    conda create -n envname crisprme

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/crisprme:<tag>

(see `crisprme/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_crisprme| image:: https://img.shields.io/conda/dn/bioconda/crisprme.svg?style=flat
   :target: https://anaconda.org/bioconda/crisprme
   :alt:   (downloads)
.. |docker_crisprme| image:: https://quay.io/repository/biocontainers/crisprme/status
   :target: https://quay.io/repository/biocontainers/crisprme
.. _`crisprme/tags`: https://quay.io/repository/biocontainers/crisprme?tab=tags


.. raw:: html

    <script>
        var package = "crisprme";
        var versions = ["2.1.9","2.1.8","2.1.8","2.1.7","2.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crisprme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crisprme/README.html